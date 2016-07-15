"use strict";

module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    clean: {
      build: ["build"]
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/*.js",
            "*.html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      }
    },

    sass: {
      style: {
        files: {
          "build/css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({
            browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]
          }),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      style: {
        src: "build/css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["build/img/*.svg"]
        }]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/*.{png,jpg,gif}"]
        }]
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"],
        options: {
          spawm: false
        }
      },
      style: {
        files: ["sass/**/*.{scss,sass}"],
        tasks: ["sass", "postcss", "csso"],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("symbols", ["svgmin"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "sass",
    "postcss",
    "csso",
    "symbols",
    "imagemin"
  ]);
};
