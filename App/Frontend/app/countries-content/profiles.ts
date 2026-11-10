import type { CountryProfile } from "./types";
import { usa } from "./usa";
import { uk } from "./uk";
import { australia } from "./australia";
import { ireland } from "./ireland";
import { italy } from "./italy";
import { germany } from "./germany";
import { canada } from "./canada";
import { france } from "./france";
import { netherlands } from "./netherlands";
import { europe } from "./europe";

export const countryProfiles: Record<string, CountryProfile> = {
  usa,
  uk,
  australia,
  ireland,
  italy,
  germany,
  canada,
  france,
  netherlands,
  europe,
};
