setup-qarethink:
	NODE_ENV=production \
	GRAPHQL_HOST=elitedev-59351.onmodulus.net \
	DATABASE_HOST=aws-us-east-1-portal.10.dblayer.com \
	DATABASE_PORT=10809 \
	DATABASE_AUTH_KEY=0TpEjNGWDhFQ6GRraDWMWqZKT40JfwiaMUL3FkCGz74 \
	DATABASE_SSL=qacacert \
	npm run build:db
