// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer",
// }

const UserRoles = {
  Viewer: "VIEWER",
  Admin: "ADMIN",
  Editor: "EDITOR",
} as const;

const canEdit = (role: (typeof UserRoles) [keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPerm = canEdit(UserRoles.Admin);

console.log(isEditPerm);
