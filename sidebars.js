module.exports = {
  docsSidebar: {
    Общее: ["intro", "general/programs", "general/types", "general/languages"],
    Python: [
      "python/syntax",
      "python/operators",
      "python/statements",
      "python/functions",
      {
        type: "category",
        label: "Типы",
        items: ["python/primitive_types", "python/sequances", "python/dicts"],
      },
      "python/fp",
      "python/modules_and_packets",
      "python/classes",
      "python/pip",
    ],
    Модули: ["modules/os", "modules/re"],
    Дополнительное: [
      "additional/telegram_bot_workshop",
      "additional/git",
      "additional/recommended",
      "additional/protocols",
      "additional/wsgi",
      {
        type: "category",
        label: "DB",
        items: ["additional/db/db", "additional/db/sql"],
      },
    ],
    Фреймворки: [
      "flask/intro",
      "flask/hello_world",
      "django/django",
      "django/first_steps",
    ],
    Домашки: [
      "homeworks/hello",
      "homeworks/calculator",
      "homeworks/season",
      "homeworks/farm",
      "homeworks/mydatabase",
      "homeworks/linkshorter",
      "homeworks/blog",
      "homeworks/final_project_requirements",
    ],
  },
};
