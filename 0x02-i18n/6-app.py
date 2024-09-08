<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{ gettext('home_title') }}</title>
</head>
<body>
	<h1>{{ gettext('home_header') }}</h1>
	{% if g.user %}
	<p>{{ gettext('logged_in_as', username=g.user.get('name', '')) }}</p>
	{% else %}
	<p>{{ gettext('not_logged_in') }}</p>
	{% endif %}
</body>
</html>
