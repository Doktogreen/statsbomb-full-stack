# Generated by Django 2.2 on 2022-04-14 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_id', models.IntegerField(unique=True)),
                ('player_name', models.CharField(blank=True, max_length=500, null=True)),
                ('player_known_name', models.CharField(blank=True, max_length=500, null=True)),
                ('player_birth_date', models.DateTimeField(auto_now_add=True)),
                ('country_id', models.IntegerField(blank=True, unique=True)),
                ('country_name', models.CharField(blank=True, max_length=500, null=True)),
                ('country_code', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
    ]