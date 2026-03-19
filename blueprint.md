# Project Blueprint

## Overview

A simple 'Hello World' web application. The goal is to evolve this into a modern, feature-rich web app.

## Implemented Features

*   Initial project setup with `index.html`, `style.css`, and `main.js`.

## Current Plan: Add Dark/Light Mode

This plan outlines the steps to implement a theme-switching feature (dark and light modes).

1.  **HTML:** Add a toggle button to `index.html` to allow users to switch themes.
2.  **CSS:**
    *   Use CSS variables to define color palettes for both light and dark themes.
    *   Create a class or data-attribute that, when applied to the `<body>` or `<html>` element, will switch the color variables to the dark theme.
3.  **JavaScript:**
    *   Add an event listener to the toggle button.
    *   When the button is clicked, toggle the dark mode class/attribute on the `<html>` element.
    *   (Optional) Store the user's preference in `localStorage` to persist the theme across sessions.
