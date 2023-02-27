/* eslint-disable */
import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dm_StorageTypes = {
  __typename?: 'DM_StorageTypes';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  modifiedAt?: Maybe<Scalars['String']>;
  storageListing: Array<StorageListing>;
  storageType: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  modifiedAt?: Maybe<Scalars['String']>;
  storageId: Scalars['String'];
  storageListing: StorageListing;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type ManyStorageListingByType = {
  storageTypeId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateOneUser?: Maybe<User>;
  UpdateOneUser?: Maybe<User>;
  UserAuth?: Maybe<User>;
};


export type MutationCreateOneUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOneUserArgs = {
  data: UpdateOneUserData;
  where: UpdateOneUserWhere;
};

export type OneStorageListingWhere = {
  ownerId: Scalars['String'];
};

export type OneUserInputType = {
  /** The email of the user */
  email?: InputMaybe<Scalars['String']>;
  /** The id of the user */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the user */
  name?: InputMaybe<Scalars['String']>;
  /** The phone number of the user */
  phone?: InputMaybe<Scalars['String']>;
};

export type Package = {
  __typename?: 'Package';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  modifiedAt?: Maybe<Scalars['String']>;
  storageSession: StorageSession;
  storageSessionId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ManyStorageListing?: Maybe<Array<StorageListing>>;
  ManyStorageListingByType?: Maybe<Array<StorageListing>>;
  ManyUser?: Maybe<Array<User>>;
  OneStorageListing?: Maybe<StorageListing>;
  OneUser?: Maybe<User>;
};


export type QueryManyStorageListingByTypeArgs = {
  where: ManyStorageListingByType;
};


export type QueryOneStorageListingArgs = {
  where: OneStorageListingWhere;
};


export type QueryOneUserArgs = {
  where?: InputMaybe<OneUserInputType>;
};

export type StorageListing = {
  __typename?: 'StorageListing';
  address: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['String'];
  image: Array<Image>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  modifiedAt?: Maybe<Scalars['String']>;
  owner: User;
  ownerId: Scalars['String'];
  size: Scalars['Int'];
  storageSessions: Array<StorageSession>;
  storageType: Dm_StorageTypes;
  storageTypeId: Scalars['String'];
};

export type StorageSession = {
  __typename?: 'StorageSession';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  endDate: Scalars['String'];
  id: Scalars['String'];
  modifiedAt?: Maybe<Scalars['String']>;
  packages: Array<Package>;
  priceCents: Scalars['Int'];
  startDate: Scalars['String'];
  storageListing: StorageListing;
  storageListingId: Scalars['String'];
  user: Scalars['String'];
};

export type UpdateOneUserData = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateOneUserWhere = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Image>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  packages: Array<Package>;
  phone?: Maybe<Scalars['String']>;
  storageSession: Array<StorageSession>;
  storages: Array<StorageListing>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  email: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type ManyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ManyUserQuery = { __typename?: 'Query', ManyUser?: Array<{ __typename?: 'User', createdAt: string, email: string, id: string, imageId?: string | null, modifiedAt?: string | null, name: string, phone?: string | null, avatar?: { __typename?: 'Image', createdAt: string, deletedAt?: string | null, id: string, imageUrl: string, modifiedAt?: string | null, storageId: string, userId?: string | null, storageListing: { __typename?: 'StorageListing', address: string, createdAt: string, deletedAt?: string | null, description: string, id: string, latitude: number, longitude: number, modifiedAt?: string | null, ownerId: string, size: number, storageTypeId: string }, user?: { __typename?: 'User', createdAt: string, email: string, id: string, imageId?: string | null, modifiedAt?: string | null, name: string, phone?: string | null } | null } | null, packages: Array<{ __typename?: 'Package', createdAt: string, deletedAt?: string | null, id: string, modifiedAt?: string | null, storageSessionId: string, userId: string }>, storageSession: Array<{ __typename?: 'StorageSession', createdAt: string, deletedAt?: string | null, endDate: string, id: string, modifiedAt?: string | null, priceCents: number, startDate: string, storageListingId: string, user: string }>, storages: Array<{ __typename?: 'StorageListing', address: string, createdAt: string, deletedAt?: string | null, description: string, id: string, latitude: number, longitude: number, modifiedAt?: string | null, ownerId: string, size: number, storageTypeId: string, image: Array<{ __typename?: 'Image', createdAt: string, deletedAt?: string | null, id: string, imageUrl: string, modifiedAt?: string | null, storageId: string, userId?: string | null }>, owner: { __typename?: 'User', createdAt: string, email: string, id: string, imageId?: string | null, modifiedAt?: string | null, name: string, phone?: string | null }, storageSessions: Array<{ __typename?: 'StorageSession', createdAt: string, deletedAt?: string | null, endDate: string, id: string, modifiedAt?: string | null, priceCents: number, startDate: string, storageListingId: string, user: string }>, storageType: { __typename?: 'DM_StorageTypes', createdAt: string, deletedAt?: string | null, id: string, modifiedAt?: string | null, storageType: string } }> }> | null };


export const ManyUserDocument = gql`
    query ManyUser {
  ManyUser {
    avatar {
      createdAt
      deletedAt
      id
      imageUrl
      modifiedAt
      storageId
      storageListing {
        address
        createdAt
        deletedAt
        description
        id
        latitude
        longitude
        modifiedAt
        ownerId
        size
        storageTypeId
      }
      user {
        createdAt
        email
        id
        imageId
        modifiedAt
        name
        phone
      }
      userId
    }
    createdAt
    email
    id
    imageId
    modifiedAt
    name
    packages {
      createdAt
      deletedAt
      id
      modifiedAt
      storageSessionId
      userId
    }
    phone
    storageSession {
      createdAt
      deletedAt
      endDate
      id
      modifiedAt
      priceCents
      startDate
      storageListingId
      user
    }
    storages {
      address
      createdAt
      deletedAt
      description
      id
      image {
        createdAt
        deletedAt
        id
        imageUrl
        modifiedAt
        storageId
        userId
      }
      latitude
      longitude
      modifiedAt
      owner {
        createdAt
        email
        id
        imageId
        modifiedAt
        name
        phone
      }
      ownerId
      size
      storageSessions {
        createdAt
        deletedAt
        endDate
        id
        modifiedAt
        priceCents
        startDate
        storageListingId
        user
      }
      storageType {
        createdAt
        deletedAt
        id
        modifiedAt
        storageType
      }
      storageTypeId
    }
  }
}
    `;
export type ManyUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ManyUserQuery, ManyUserQueryVariables>, 'query'>;

    export const ManyUserComponent = (props: ManyUserComponentProps) => (
      <ApolloReactComponents.Query<ManyUserQuery, ManyUserQueryVariables> query={ManyUserDocument} {...props} />
    );
    

/**
 * __useManyUserQuery__
 *
 * To run a query within a React component, call `useManyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useManyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useManyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useManyUserQuery(baseOptions?: Apollo.QueryHookOptions<ManyUserQuery, ManyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ManyUserQuery, ManyUserQueryVariables>(ManyUserDocument, options);
      }
export function useManyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ManyUserQuery, ManyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ManyUserQuery, ManyUserQueryVariables>(ManyUserDocument, options);
        }
export type ManyUserQueryHookResult = ReturnType<typeof useManyUserQuery>;
export type ManyUserLazyQueryHookResult = ReturnType<typeof useManyUserLazyQuery>;
export type ManyUserQueryResult = Apollo.QueryResult<ManyUserQuery, ManyUserQueryVariables>;