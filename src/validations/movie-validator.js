export const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'El titulo es requerido';
    }

    if (!values.awards) {
        errors.awards = 'Ningun premio?';
    }

    if (!values.rating) {
        errors.rating = 'Tan mal le fue?';
    }

    if (!values.release_date) {
        errors.release_date = 'Nunca existio?';
    }
    
    if (!values.length) {
        errors.length = 'No duro nada?';
    }

    if (!values.genre_id) {
        errors.genre_id = 'Es desgenerada?';
    }

    return errors;
};