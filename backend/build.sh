set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input

python manage.py makemigrations api business customer payment

python manage.py migrate

if [[ $CREATE_SUPERUSER ]];
then
  python manage.py createsuperuser --no-input
fi
