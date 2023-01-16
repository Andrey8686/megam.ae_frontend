export const copy = () => {
    return app.gulp.src(app.path.src.content)
        .pipe(app.gulp.dest(app.path.build.content))
}
