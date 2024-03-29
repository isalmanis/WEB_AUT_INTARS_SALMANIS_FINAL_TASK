import PracticeFormPage from "../components/practiceForm.page";

describe('DemoQA', () => {
  context('Practice Form', () => {
    it('Form actions', () => {
      PracticeFormPage.visit();

      const testValues = {
        firstName: "Mar",
        lastName: "Spihc",
        userEmail: "mar.spihc@draobrehtom.com",
        gender: "Other",
        phoneNumber: "7755991122",
        datePickerYear: "1930",
        datePickerMonth: "1",
        datePickerDay: "28",
        datePickerDate: "28 February,1930",
        subject: "Economics",
        hobby: "Music",
        testImage: "chibiMeAtWork.jpg",
        address: "test tree 42, apt. 13",
        state: "NCR",
        city: "Delhi"
      };

      //Form fill
      PracticeFormPage.firstNameInput.type(testValues.firstName);
      PracticeFormPage.lastNameInput.type(testValues.lastName);
      PracticeFormPage.emailInput.type(testValues.userEmail);
      PracticeFormPage.genderRadio.check(PracticeFormPage.genderOptions.other, { force: true });
      PracticeFormPage.phoneNumberInput.type(testValues.phoneNumber);
      PracticeFormPage.dateOfBirthInput.click().then(() => {
        PracticeFormPage.datePickerYearSelect.select(testValues.datePickerYear);
        PracticeFormPage.datePickerMonthSelect.select(testValues.datePickerMonth);
        PracticeFormPage.datePickerCurrentMonthDays.contains(testValues.datePickerDay).click();
      });
      PracticeFormPage.subjectsInput.type(testValues.subject, { force: true }).then(() => {
        PracticeFormPage.subjectOptions.contains(testValues.subject).click();
      });
      PracticeFormPage.hobbiesCheckboxes.check(PracticeFormPage.hobbiesOptions.music, { force: true });
      PracticeFormPage.pictureUploadInput.selectFile(Cypress.env('pathToTestFiles') + testValues.testImage)
      PracticeFormPage.addressInput.type(testValues.address);
      PracticeFormPage.stateInput.click().then(() => {
        PracticeFormPage.stateOptions.contains(testValues.state).click();
      });
      PracticeFormPage.cityInput.click().then(() => {
        PracticeFormPage.cityOptions.contains(testValues.city).click();
      });
      PracticeFormPage.submitBtn.click();

      //Form validation
      PracticeFormPage.submissionDialog.then(() => {
        PracticeFormPage.getSubmissionStudentNameField
            .should('contain.text', testValues.firstName + " " + testValues.lastName);
        PracticeFormPage.getSubmissionStudentEmailField.should('contain.text', testValues.userEmail);
        PracticeFormPage.getSubmissionGenderField.should('contain.text', testValues.gender);
        PracticeFormPage.getSubmissionMobileField.should('contain.text', testValues.phoneNumber);
        PracticeFormPage.getSubmissionDateOfBirthField.should('contain.text', testValues.datePickerDate);
        PracticeFormPage.getSubmissionSubjectsField.should('contain.text', testValues.subject);
        PracticeFormPage.getSubmissionHobbiesField.should('contain.text', testValues.hobby);
        PracticeFormPage.getSubmissionPictureField.should('contain.text', testValues.testImage);
        PracticeFormPage.getSubmissionAddressField.should('contain.text', testValues.address);
        PracticeFormPage.getSubmissionStateAndCityField
            .should('contain.text', testValues.state + " " + testValues.city);
      });
    })
  })
})