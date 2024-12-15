---
layout: default
---

# Recipes

{% for recipe in collections.recipes.resources %}
<a href="{{ recipe.relative_url }}">{{ recipe.title }}</a>
{% endfor %}
