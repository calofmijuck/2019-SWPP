from django.contrib import admin
from polls.models import Question, Choice

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 2

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['question_text']}),
        ('Date Information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text', 'pub_date') # Set record list column
    list_filter = ['pub_date'] # filter side bar
    search_fields = ['question_text'] # Search box


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
