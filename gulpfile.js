let gulp       = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('app/style/**/*.scss') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js', // Берем Magnific Popup
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});
gulp.task('css-libs', ['sass'], function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'app/libs/magnific-popup/dist/magnific-popup.css', // Берем Magnific Popup
		])
		.pipe(concat('libs.min.css')) // Собираем их в кучу в новом файле libs.min.css
		.pipe(cssnano()) // Сжимаем CSS файл
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/js
});

// gulp.task('css-libs', ['sass'], function() {
// 	return gulp.src('app/css/libs.css') // Выбираем файл для минификации
// 		.pipe(cssnano()) // Сжимаем
// 		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
// 		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
// });

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/style/**/*.scss', ['sass']); // Наблюдение за scss файлами в папке style
	gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({ // С кешированием
		// .pipe(imagemin({ // Сжимаем изображения без кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))/**/)
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

    let buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/main.css',
		'app/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'));

    let buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'));

    let buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'));

	let buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

gulp.task('default', ['watch']);
