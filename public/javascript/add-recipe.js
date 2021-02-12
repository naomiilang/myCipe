async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value;
    const recipe_text = document.querySelector('textarea[name="recipe_text"]').value;
    const ingredients_text = document.querySelector('textarea[name="ingredients_text"]').value;
    const directions_text = document.querySelector('textarea[name="directions_text"]').value;

    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        recipe_text,
        ingredients_text,
        directions_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);