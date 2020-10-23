const gulp = require("gulp");

const gImageMin = require("gulp-imagemin");

const rimraf = require("rimraf");

 

function clean(done) {

  rimraf("dist", done);

}

const minify = require('gulp-minify');


function compress() {
  return gulp.src('src/**/*.{js,css,html}')

    .pipe(minify({
        ext: {
            src: '.orig.js',
            min: '.js'
        }
    }))
    .pipe(gulp.dest('dist'))
};

 


 

function images() {

  return gulp

    .src("src/**/*.{jpg,jpeg,svg,png,gif}")

    .pipe(

      gImageMin({

        verbose: true,
      })

    )

    .pipe(gulp.dest("dist"));

}

 

gulp.task("default", gulp.series(clean, gulp.parallel(compress, images)));