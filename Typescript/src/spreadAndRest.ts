// spread operator

const friends = ["Rahim", "Karim"]

const schoolFreinds = ["Jamal", "Babul"]

const collegeFreinds = ["Shamim", "Shahin"]

friends.push(...schoolFreinds);
friends.push(...collegeFreinds);

console.log(friends);

const user = {
    name: "Ibrahim",
    phoneNo: "01812345678"
}

const otherInfo = {
    hobby : 'Gaming',
    favoriteColor: 'Green'
}

const userInfo = {
    ...user,
    ...otherInfo
}

console.log(userInfo);

// rest operator

const sendInvite = (...friends : string[]) => {
    friends.forEach((friend : string)=>{
        console.log(`Send invite to ${friend}`);
    })
}

sendInvite("Rahim", "Karim", "Jamal")