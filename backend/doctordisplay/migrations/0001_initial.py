# Generated by Django 4.2.16 on 2024-09-27 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('specialization', models.CharField(max_length=100)),
                ('profile_description', models.TextField()),
                ('career_path', models.TextField()),
                ('highlights', models.TextField()),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=10)),
            ],
            options={
                'db_table': 'doctor',
            },
        ),
    ]
