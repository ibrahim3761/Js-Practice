"use strict";
// enum : set of fixed string letaral ke ek jaigai rakhe
// type UsereRole = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
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
