import path from "path"
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { loadFilesSync } from "@graphql-tools/load-files"

const typesArray = loadFilesSync(path.join(__dirname, "/api/**/*.graphql"))
const resolversArray = loadFilesSync(path.join(__dirname, "/api/**/*.js"))

const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs(typesArray),
    resolvers: mergeResolvers(resolversArray)
})

export default schema