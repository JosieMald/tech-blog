const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#postTitle").value.trim();
    const body = document.querySelector("#postText").value.trim();
  
    console.log(title);
    console.log(body);
  
    if (body && title) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title, body }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
  