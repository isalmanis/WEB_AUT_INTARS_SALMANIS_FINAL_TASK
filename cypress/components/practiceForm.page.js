class PracticeFormPage
{
    static visit(){
        return cy.visit(Cypress.env('siteBaseUrl') + 'automation-practice-form');
    }

    static get firstNameInput() {
        return cy.get('input[type=text]#firstName');
    }

    static get lastNameInput() {
        return cy.get('input[type=text]#lastName');
    }

    static get emailInput() {
        return cy.get('input[type=text]#userEmail');
    }

    static genderOptions = {
        male: "Male",
        female: "Female",
        other: "Other",
    };

    static get genderRadio() {
        return cy.get('input[type=radio][name=gender]');
    }

    static get phoneNumberInput() {
        return cy.get('input[type=text]#userNumber');
    }

    static get dateOfBirthInput() {
        return cy.get('input[type=text]#dateOfBirthInput');
    }

    static get datePickerYearSelect() {
        return cy.get('select.react-datepicker__year-select');
    }

    static get datePickerMonthSelect() {
        return cy.get('select.react-datepicker__month-select');
    }

    static get datePickerCurrentMonthDays() {
        return cy.get('div.react-datepicker__day:not(.react-datepicker__day--outside-month)');
    }

    static get subjectsInput() {
        return cy.get('input[type=text]#subjectsInput');
    }

    static get subjectOptions() {
        return cy.get('div.subjects-auto-complete__option')
    }

    static hobbiesOptions = {
        sports: "1",
        reading: "2",
        music: "3",
    };

    static get hobbiesCheckboxes() {
        return cy.get('input[type=checkbox][id^=hobbies-checkbox]');
    }

    static get pictureUploadInput() {
        return cy.get('input[type=file]#uploadPicture');
    }

    static get addressInput() {
        return cy.get('textarea#currentAddress');
    }

    static get stateInput() {
        return cy.get('div[id=state]');
    }

    static get stateOptions() {
        return cy.get('div[id=state] div[id^=react-select]');
    }


    static get cityInput() {
        return cy.get('div[id=city]');
    }

    static get cityOptions() {
        return cy.get('div[id=city] div[id^=react-select]');
    }

    static get submitBtn() {
        return cy.get('button[type=submit]#submit');
    }

    static get submissionDialog() {
        return cy.get('div[role=dialog]>div[role=document]')
    }

    static get getSubmissionStudentNameField() {
        return cy.contains('td', 'Student Name').next();
    }

    static get getSubmissionStudentEmailField() {
        return cy.contains('td', 'Student Email').next();
    }

    static get getSubmissionGenderField() {
        return cy.contains('td', 'Gender').next();
    }

    static get getSubmissionMobileField() {
        return cy.contains('td', 'Mobile').next();
    }

    static get getSubmissionDateOfBirthField() {
        return cy.contains('td', 'Date of Birth').next();
    }

    static get getSubmissionSubjectsField() {
        return cy.contains('td', 'Subjects').next();
    }

    static get getSubmissionHobbiesField() {
        return cy.contains('td', 'Hobbies').next();
    }

    static get getSubmissionPictureField() {
        return cy.contains('td', 'Picture').next();
    }

    static get getSubmissionAddressField() {
        return cy.contains('td', 'Address').next();
    }

    static get getSubmissionStateAndCityField() {
        return cy.contains('td', 'State and City').next();
    }
}

export default PracticeFormPage;