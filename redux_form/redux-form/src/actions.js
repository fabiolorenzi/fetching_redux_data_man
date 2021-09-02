export const submit = (data) => {
    return {
        type: "SUBMIT",
        payload: {
            name: data.name,
            surname: data.surname,
            class: data.class,
            year: data.year
        }
    }
};