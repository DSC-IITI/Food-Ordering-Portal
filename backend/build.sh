set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input

python manage.py makemigrations api authentication business customer payment

python manage.py migrate