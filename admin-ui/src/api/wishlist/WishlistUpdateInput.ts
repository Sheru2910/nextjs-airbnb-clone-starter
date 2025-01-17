import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistUpdateInput = {
  listing?: ListingWhereUniqueInput;
  tripinfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};
