<script>
    import { page } from '$app/stores'
    const greetings = {
        en: 'Hello!',
        de: 'Hallo!',
        fr: 'Bonjour!',
        es: 'Hola!'
    }
    const { lang = 'en' } = $page.params
    const greeting = greetings[lang]
</script>

<!-- DOUBLE SQUARE BRACKETS ON A FOLDER MEAN OPTIONAL [[]] -->

<h1>{greeting}</h1>