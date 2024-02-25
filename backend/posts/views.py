from django.views import View
from django.http import HttpRequest, JsonResponse
from posts.models import Post


class PostsAPI(View):

    def get(request: HttpRequest):
        posts = Post.objects.all()
        return JsonResponse({
            'data': map(lambda post: {
                'uuid': str(post.uuid),
                'title': post.title
            }, posts)
        })
