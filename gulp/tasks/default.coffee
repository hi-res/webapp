gulp = require 'gulp'

gulp.task "build", ['templates', 'scripts', 'vendor', 'styles']
gulp.task "default", ['build', 'watch', 'server', 'browser-sync']