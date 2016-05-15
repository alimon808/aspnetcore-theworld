# aspnetcore-theworld
Pluralsight [course](https://app.pluralsight.com/library/courses/aspdotnet-5-ef7-bootstrap-angular-web-app/table-of-contents) by Shawn Wildermuth.  Building web app with aspnetcore, mvc6, ef7 and angularjs

### Modules
- html & css basics
- javascript
  - events (e.g. [onmouseenter](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter), [onmouseleave](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave))
  - [jQuery](https://jquery.com/)
  - [immediately invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
  - [bower](http://bower.io/)
- mvc 6
  - startup.cs
    - services.AddMvc()
    - app.UseMvc(config => config.MapRoute(name: "Default", template: "{controller}/{action}/{id?}), defaults: new {controller = "App", action = "Index"})
  - package.json
    - Microsoft.AspNet.Mvc
- [bootstrap](http://getbootstrap.com/)
  - edit bower.json - bootstrap : 3.3.4
  - [bootswatch](https://bootswatch.com/)
  - grid system (12 columns)
- [entity framework 7](http://docs.efproject.net/en/latest/)
  - [entities] (http://docs.efproject.net/en/latest/modeling/index.html)
  - [DbContext](http://docs.efproject.net/en/latest/miscellaneous/configuring-dbcontext.html)
  - seeding & creating db
  - [repository pattern](https://msdn.microsoft.com/en-us/library/ff649690.aspx)
  - [logging](http://docs.efproject.net/en/latest/miscellaneous/logging.html)
- REST apis
  - [Postman](https://www.getpostman.com/)
- Authorization and Authentication using [Identity](https://docs.asp.net/en/latest/security/authentication/introduction-to-aspnet-identity.html)
- angularjs
- angularjs routing
- deployment
  - [gulp] (http://gulpjs.com)
  - [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
  - [gulp-gn-annotate](https://www.npmjs.com/package/gulp-ng-annotate)
