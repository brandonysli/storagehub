import "type-graphql"

@ObjectType()
class Rate {
  @Field(type => Int)
  value: number;

  @Field()
  date: Date;

  user: User;
}