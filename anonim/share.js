const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'MDN shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });

funcion shareIt(title,text,url) {
    const shareData = {
        title: title,
        text: text,
        url: url,
    }

    navigator.share(shareData)

    try {
        await navigator.share(shareData)
        console.log('MDN shared successfully')
    } catch(err) {
        console.log('Error: ' + err)
    }
}
