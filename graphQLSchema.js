const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')
const axios = require('axios')

//Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
})

//Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
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
  }),
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
