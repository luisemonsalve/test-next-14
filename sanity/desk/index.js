import {
  HomeIcon,
  BookIcon,
  BulbOutlineIcon,
  ComponentIcon,
  EarthAmericasIcon,
  ControlsIcon,
  DashboardIcon,
  // DotIcon,
  // IceCreamIcon,
  // JoystickIcon,
  // LemonIcon,
  // MasterDetailIcon,
  // MoonIcon,
  // UsersIcon,
} from "@sanity/icons";

export const deskStructure = (S) => {
  return S.list()
    .title("Páginas")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.document()
            .title("Home")
            .schemaType("home")
            .documentId("home-config")
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["home", "indicator-simple", "media.tag"].includes(listItem.getId())
      ),
    ]);
};
