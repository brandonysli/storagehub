import { ObjectType, Field, ID } from "type-graphql";


@ObjectType({ description: "The recipe model" })
class Recipe {
  @Field(type => ID)
    id!: string;

  @Field({ description: "The title of the recipe" })
  title!: string;


  @Field({ nullable: true })
  averageRating?: number;
}