import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Wishlist = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  tripinfo: JsonValue;
  updatedAt: Date;
  user?: User;
};
