// enum : set of fixed string letaral ke ek jaigai rakhe

// type UsereRole = "Admin" | "Editor" | "Viewer";

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}


const canEdit = (role : UserRoles) =>{
    if( role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }
    else {
        return false;
    }
}

const isEditPerm = canEdit(UserRoles.Admin);

console.log(isEditPerm);
