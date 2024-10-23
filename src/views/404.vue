<template>
    <div class="text-black dark:text-white not-found">
        <h1 class="font-bold">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

.not-found h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.not-found p {
    font-size: 1.5em;
    margin-bottom: 20px;
}

.not-found a {
    font-size: 1.2em;
    color: #5c43ff;
    text-decoration: none;
}

.not-found a:hover {
    text-decoration: underline;
}
</style>