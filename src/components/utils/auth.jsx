export function setUserLocalStorage(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

export function currentUserData() {
  let currentUser = JSON.parse(sessionStorage.getItem("user"));
  return currentUser;
}

export function deleteUserLocalStorage() {
  sessionStorage.removeItem("user");
}
