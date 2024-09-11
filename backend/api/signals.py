from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string

from payment.models import Payment

@receiver(post_save, sender=User)
def send_welcome_email(sender, instance, created, **kwargs):
    if created:
        subject = "Welcome to IITI Foodie!"
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [instance.email]
        
        # Optional plain text content
        text_content = f"Hi {instance.username},\n\nThank you for signing up on our platform!"
        
        # HTML content - include user email in context
        html_content = render_to_string('welcome_email.html', {
            'user': instance
        })
        
        # Create and send the email
        msg = EmailMultiAlternatives(subject, text_content, from_email, recipient_list)
        msg.attach_alternative(html_content, "text/html")
        msg.send()


@receiver(post_save, sender=Payment)
def send_welcome_email(sender, instance, created, **kwargs):
    if created:
        subject = "Welcome to IITI Foodie!"
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [instance.user.email]
        
        # Optional plain text content
        text_content = f"Hi {instance.user.username},\n\nThank you for signing up on our platform!"
        
        # HTML content - include user email in context
        html_content = render_to_string('welcome_email.html', {
            'user': instance.user
        })
        
        # Create and send the email
        msg = EmailMultiAlternatives(subject, text_content, from_email, recipient_list)
        msg.attach_alternative(html_content, "text/html")
        msg.send()
