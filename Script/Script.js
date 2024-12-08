document.addEventListener('DOMContentLoaded', () => {
    //----------------------------------- Modal -----------------------------------//
    // On a la modal
    const modal = document.getElementById('myModal');

    // sa recupere le <span> qui ferme la modal
    const closeSpan = document.getElementsByClassName('close')[0];

    // quand je click sur x la modal ce ferme
    closeSpan.onclick = function () {
        modal.style.display = 'none';
    };

    // quand on click ailleur la modal ce ferme aussi
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    //---------------------- Majuscule pour le "Nom" uniquement ----------------------//

    const inputField = document.getElementById('nom');
    inputField.addEventListener('keyup', function (event) {
        event.preventDefault();
        inputField.value = inputField.value.toUpperCase();
    });

    //---------------------- Majuscule + Minuscule pour le "Prenom" ------------------//

    const champPrenom = document.getElementById('prenom');
    champPrenom.addEventListener('keyup', function (event) {
        event.preventDefault();
        champPrenom.value = champPrenom.value.charAt(0)
            .toUpperCase() + champPrenom.value.slice(1)
                .toLowerCase();
    });

    //------------------------- Date Regex ----------------------//

    const dateInput = document.getElementById('dateDeNaissance');

    // Événement correct pour l'input
    dateInput.addEventListener('input', function () {
        dateInput.value = formatDate(dateInput.value);
    });

    function formatDate(input) {
        // Remplacer les caractères séparateurs (-, ., espace) par "/"
        input = input.replace(/[-. ]/g, '/');

        // Utiliser une expression régulière pour formater la date
        input = input.replace(
            /^(\d{0,2})(?:\/?)(\d{0,2})(?:\/?)(\d{0,4}).*$/,
            (match, day, month, year) => {
                let formatted = '';
                if (day) formatted += day;
                if (month) formatted += '/' + month;
                if (year) formatted += '/' + year;
                return formatted;
            }
        );

        // Limiter la chaîne à 10 caractères (format jj/mm/aaaa)
        return input.slice(0, 10);
    }

    //----------------------------Systeme Cumulatif de gestion des Erreurs -------------------------//
    const form = document.getElementById('formulaire');
    const formStatus = document.getElementById('formStatus');
    const resetBtn = document.getElementById('resetBtn');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let errors = [];

        // Réinitialiser les messages d'erreur
        document.querySelectorAll('span.error')
            .forEach(span => span.textContent = '');
        formStatus.textContent = '';

        // Validation du champ Nom
        const nomField = document.getElementById('nom');
        const nomError = document.getElementById('nomError');

        if (nomField.value.trim() === '') {
            errors.push({
                field: nomError,
                message: 'Nom is required.'
            });
        } else if (nomField.value.length < 3) {
            errors.push({
                field: nomError,
                message: '3 caractères alphanumériques au minimum !!!'
            });
        }

        // Validation du champ Prénom
        const prenomField = document.getElementById('prenom');
        const prenomError = document.getElementById('prenomError');

        if (prenomField.value.trim() === '') {
            errors.push({
                field: prenomError,
                message: 'Champ obligatoire obligatoire.'
            });
        } else if (prenomField.value.length < 3) {
            errors.push({
                field: prenomError,
                message: '3 caractères alphanumériques au minimum !!!'
            });
        }

        // Validation du champ Date de Naissance
        const dateDeNaissanceField = document.getElementById('dateDeNaissance');
        const dateDeNaissanceError = document.getElementById('dateDeNaissanceError');

        const dateDeNaissance = dateDeNaissanceField.value.trim();
        if (dateDeNaissance === '') {
            errors.push({
                field: dateDeNaissanceError,
                message: 'Champ obligatoire.'
            });
        } else if (!validateDate(dateDeNaissance)) {
            errors.push({
                field: dateDeNaissanceError,
                message: 'Date invalide (jj/mm/aaaa).'
            });
        }

        // Validation du champ Email
        const emailField = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const email = emailField.value.trim();

        if (email === '') {
            errors.push({
                field: emailError,
                message: 'Champ obligatoire.'
            });
        } else if (!validateEmail(email)) {
            errors.push({
                field: emailError,
                message: 'Email Invalide.'
            });
        }

        // Validation du champ Code Confidentiel
        const codeConfidentielField = document.getElementById('codeConfidentiel');
        const codeConfidentielError = document.getElementById('codeConfidentielError');

        if (codeConfidentielField.value.trim() === '') {
            errors.push({
                field: codeConfidentielError,
                message: 'Champ obligatoire obligatoire.'
            });
        }

        // Si le formulaire est valide, afficher un message de succès
        if (errors.length === 0) {
            formStatus.textContent = 'Formulaire transmis avec succes!';
            // Ouvrir la modale
            modal.style.display = 'block';

            // Vous pouvez également envoyer les données du formulaire à un serveur ici
        } else {
            // Afficher les erreurs cumulatives
            errors.forEach(err => {
                console.log(err);
                err.field.textContent = err.message;
            });
        }

    });

    // Fonction pour valider le format de la date
    function validateDate(date) {
        const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        return regex.test(date);
    }

    // Fonction pour valider le format de l'email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Gestionnaire d'événements pour le bouton "Annuler"
    resetBtn.addEventListener('click', () => {
        // Réinitialiser les messages d'erreur
        document.querySelectorAll('span.error')
            .forEach(span => span.textContent = '');
        formStatus.textContent = '';
    });
});

// ------------------------Erreur de saisie --------------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulaire');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche de soumettre le formulaire

        // Récupérer les champs
        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');
        const nomError = document.getElementById('nomError');
        const prenomError = document.getElementById('prenomError');

        let isValid = true;

        // Si tout est valide, soumettre le formulaire
        if (isValid) {
            alert('Formulaire soumis avec succès !');
            form.submit(); // Soumettre le formulaire
        }

        //---------------------------- 3 caractères alphanumériques -------------------------//

        // on Valide le champ Nom
        if (!/^[a-zA-ZÀ-ÿ0-9]{3,}$/.test(nom.value.trim())) {
            isValid = false;
            nomError.textContent = 'Le nom doit comporter au moins 3 caractères valides.';
            nomError.style.visibility = 'visible';
        } else {
            nomError.textContent = '';
            nomError.style.visibility = 'hidden';
        }

        // on Valide le champ Prénom
        if (!/^[a-zA-ZÀ-ÿ0-9]{3,}$/.test(prenom.value.trim())) {
            isValid = false;
            prenomError.textContent = 'Le prénom doit comporter au moins 3 caractères valides.';
            prenomError.style.visibility = 'visible';
        } else {
            prenomError.textContent = '';
            prenomError.style.visibility = 'hidden';
        }
    });
});
