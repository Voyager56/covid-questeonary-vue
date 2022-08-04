import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      page: "form/personal-info",
      errors: {},
      form: {
        personalInfo: {
          name: "",
          lastName: "",
          email: "",
        },
        covidInfo: {
          covid: "",
          test: false,
          covidDate: "",
          antiBodies: "",
        },
        vaccinatedInfo: {
          vaccinated: "",
          stage: "",
          waitingFor: "",
        },
        redberryInfo: {
          meetingFrequency: "",
          office: "",
          meeting: "",
          environment: "",
        },
      },
    };
  },
  getters: {
    getData(state) {
      let values = {
        first_name: state.form.personalInfo.name,
        last_name: state.form.personalInfo.lastname,
        email: state.form.personalInfo.mail,
        had_covid: state.form.covidInfo.covid,
        had_antibody_test: state.form.covidInfo.test,
        covid_sickness_date: state.form.covidInfo.covidDate,
        antibodies: {
          test_date: state.form.covidInfo.testDate,
          number: state.form.covidInfo.antiBodies,
        },
        had_vaccine: state.form.vaccinatedInfo.vaccinated ? true : false,
        vaccination_stage: state.form.vaccinatedInfo.stage,
        i_am_waiting: state.form.vaccinatedInfo.waitingFor,
        non_formal_meetings: state.form.redberryInfo.meetingFrequency,
        number_of_days_from_office: Number(state.form.redberryInfo.office),
        what_about_meetings_in_live: state.form.redberryInfo.meeting,
        tell_us_your_opinion_about_us: state.form.redberryInfo.environment,
      };
      if (!values.had_antibody_test) delete values.antibodies;
      for (let key in values) {
        if (values[key] === null || values[key] === undefined) {
          delete values[key];
        }
      }
      return values;
    },
  },
  mutations: {
    setCovidInfo(state, value) {
      state.form.covidInfo = value;
    },
    setPersonalInfo(state, value) {
      state.form.personalInfo = value;
    },
    setVaccinatedInfo(state, value) {
      state.form.vaccinatedInfo = value;
    },
    setRedberryInfo(state, value) {
      state.form.redberryInfo = value;
    },
  },
  actions: {},
  modules: {},
});
