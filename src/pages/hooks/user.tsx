import { gql } from "@apollo/client";

export const ManyUser = gql`
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

export const UserAuth = gql`
  query UserAuth {
    UserAuth {
      phone
      name
      imageId
      id
      email
      avatar {
        id
        imageUrl
        userId
      }
    }
  }
`;
