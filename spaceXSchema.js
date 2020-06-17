const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')
const axios = require('axios')

//Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_date_utc: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    details: { type: GraphQLString},
    rocket: { type: RocketType },
    launch_site: {type: LaunchSiteType},
    links: {type: LinksType}
  }),
})

//Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
})

//Launch Site Type
const LaunchSiteType = new GraphQLObjectType({
  name: 'LaunchSite',
  fields: () => ({
    site_id: {type: GraphQLString},
    site_name: {type: GraphQLString},
  })
})

//Links Type
const LinksType = new GraphQLObjectType({
  name: 'LinksType',
  fields: () => ({
    mission_patch: {type: GraphQLString},
    article_link: {type: GraphQLString},
    wikipedia: {type: GraphQLString},
    video_link: {type: GraphQLString},
    flickr_images: {type: new GraphQLList(GraphQLString)}
  })
})

//Root Query Type
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/launches').then((res) => res.data)
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: {
          type: GraphQLInt,
        },
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`).then((res) => res.data)
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/rockets').then((res) => res.data)
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v4/rockets/${args.id}`).then((res) => res.data)
      },
    },
      sites: {
        type: new GraphQLList(LaunchSiteType),
        resolve(parent, args) {
          return axios.get('https://api.spacexdata.com/v3/launchpads').then((res) => res.data)
        },
      },
      site: {
        type: LaunchSiteType,
        args: {
          site_id: {
            type: GraphQLString,
          },
        },
        resolve(parent, args) {
          return axios.get(`LaunchSiteType/${args.site_id}`).then((res) => res.data)
        },
      },
  }),
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
