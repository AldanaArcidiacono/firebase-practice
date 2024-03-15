<script setup></script>

<template>
  <div>
    <h1>App</h1>
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <button class="btn btn-info">Logout</button>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>
