# Rgm Ibiza Metal

A Rails 6.1 application generated with the [Le Wagon template](https://github.com/lewagon/rails-templates). It ships a multipage marketing site with authentication hooks and locale-aware routes for English and Spanish visitors.

## Tech stack
- Ruby 2.7.2 with Rails 6.1.3
- PostgreSQL for persistence
- Webpacker with Yarn-managed frontend packages (Bootstrap, jQuery, Owl Carousel, Modernizr, and more)
- Devise for user authentication scaffolding

## Prerequisites
- Ruby 2.7.2 and Bundler installed
- PostgreSQL running locally
- Node.js and Yarn available for compiling assets

## Setup
1. Install Ruby dependencies:
   ```bash
   bundle install
   ```
2. Install JavaScript dependencies:
   ```bash
   yarn install
   ```
3. Configure your database credentials in `config/database.yml` or via environment variables. A `.env` file is supported in development/test through `dotenv-rails`.
4. Create and seed the databases:
   ```bash
   bin/rails db:setup
   ```

## Running the app
Start the development server on http://localhost:3000:
```bash
bin/rails server
```
Routes are scoped to optional `en` or `es` locales and include marketing pages like `home`, `about`, multiple `service_*` pages, `gallery`, and `contact`.

## Frontend assets
Webpacker bundles JavaScript and CSS. To rebuild assets during development, use:
```bash
yarn run webpack-dev-server
```

## Testing
Run the Rails test suite with:
```bash
bin/rails test
```
