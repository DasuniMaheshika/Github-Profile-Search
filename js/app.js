document.getElementById("button").addEventListener("click", showGithubUser);
async function showGithubUser() {
  let username = document.getElementById("username").value;
  let url = `https://api.github.com/users/${username}`;
  let token = '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';

  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await res.json();

    if (data.message) {
      document.getElementById("res").innerHTML = `
          <h3>Profile not found</h3>
        `;
    } else {
      document.getElementById("res").innerHTML = `
          <div class="details-box">

            <div>
                <img src="${data.avatar_url}" class="avatar" alt="${data.name}">
            </div>

            <div class="user-info">
              <h2>${data.name}</h2>
              <h5>${data.login}</h5>
              <p>${data.location}</p>
              <div class="user-bio">
                <a href="${data.html_url}" target="_blank">View Profile</a>
              </div>
              <ul class="data">
                <li><strong>${data.followers} Followers</strong></li>
                <li><strong>${data.following} Following</strong></li>
                <li><strong>${data.public_repos} Repositories</strong></li>
              </ul>
            </div>
          </div>         
        `;
    }
  } catch (e) {
    console.log(e);
  }
}
