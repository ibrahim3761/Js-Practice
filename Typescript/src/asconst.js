"use strict";
// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer",
// }
const UserRoles = {
    Viewer: " ",
    Admin: "Admin",
    Editor: "Editor",
};
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditPerm = canEdit(UserRoles.Admin);
console.log(isEditPerm);
