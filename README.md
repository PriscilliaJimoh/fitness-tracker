# Developer Setup

### Backend Setup
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install flask flask-cors
flask --app src.db init-db
flask --app src.db run
```

### Frontend Setup

```bash
npm install
npm start
```

### Linting & Formatting

**Prettier** — used for formatting only

```bash
npx prettier . --check
npx prettier . --write
```

**ESLint** — used for code quality, bugs, and logical rules

```bash
npx eslint .
```

**Ruff** — used for Python linting

```bash
ruff check . --fix
ruff format .
```

## Branch Naming Convention

All branches must follow the pattern `feature/<name>`, e.g. `feature/login-page`, this is a branching rule set within Git.
All branches not following this convention will be rejected
