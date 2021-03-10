import {ApolloServer} from "apollo-server";
import gapiToGraphQL from 'gapi-to-graphql'
import GoogleSheetsAPI from 'gapi-to-graphql/google_apis/sheets-v4';
import {gql} from "apollo-server";

const {schema, resolvers} = gapiToGraphQL({gapiAsJsonSchema: GoogleSheetsAPI})


const server = new ApolloServer({
    typeDefs: gql`
        ${schema}
    `,
    // @ts-ignore (FIXME: should be casted to default Resolvers type?)
    resolvers,
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
