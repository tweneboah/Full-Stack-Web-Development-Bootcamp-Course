function collectData() {
  const languageProficiencyEls = document.getElementsByName(
    "languageProficiency"
  );

  console.log(languageProficiencyEls);
  // Loop through the NodeList to find the selected radio button
  for (let i = 0; i < languageProficiencyEls.length; i++) {
    if (languageProficiencyEls[i].checked) {
      console.log(`Selected language is: ${languageProficiencyEls[i].value}`);
    }
  }

  //log all elements with the name 'email'
  const emailsEl = document.getElementsByName("email");
  console.log(emailsEl);
}
