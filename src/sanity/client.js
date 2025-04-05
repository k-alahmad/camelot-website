import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ppmk17jj",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "sk1S6fmX6koYfABSes1oMciJF8uaLLvukynAdnVvdO4GVAbV8RErLcxD1Q3QglWXC1Oze1WEt7Vu9BswYZFacT3ekgBfDsZCreBuG0HD4A9QxTUD1KezIplE4irp1My5vckmos3d5LN76IPYLbfTmUDUguSH7OI2eZsH4yUijo3HuLdDBpz3",
  useCdn: false,
});
